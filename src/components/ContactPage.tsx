import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navigation } from "./Navigation";
import { Footer } from "./Footer";
import { Reveal } from "./ui/Reveal";

interface CountryCodeItem {
  code: string;
  name: string;
  flag: string;
}

const COUNTRY_CODES: CountryCodeItem[] = [
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+971", name: "UAE / Dubai", flag: "🇦🇪" },
  { code: "+1", name: "Canada", flag: "🇨🇦" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
  { code: "+65", name: "Singapore", flag: "🇸🇬" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+966", name: "Saudi Arabia", flag: "🇸🇦" },
  { code: "+974", name: "Qatar", flag: "🇶🇦" },
  { code: "+965", name: "Kuwait", flag: "🇰🇼" },
  { code: "+31", name: "Netherlands", flag: "🇳🇱" },
  { code: "+41", name: "Switzerland", flag: "🇨🇭" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+27", name: "South Africa", flag: "🇿🇦" },
  { code: "+64", name: "New Zealand", flag: "🇳🇿" },
  { code: "+353", name: "Ireland", flag: "🇮🇪" },
  { code: "+34", name: "Spain", flag: "🇪🇸" },
  { code: "+39", name: "Italy", flag: "🇮🇹" },
  { code: "+46", name: "Sweden", flag: "🇸🇪" },
  { code: "+47", name: "Norway", flag: "🇳🇴" },
  { code: "+45", name: "Denmark", flag: "🇩🇰" },
  { code: "+358", name: "Finland", flag: "🇫🇮" },
  { code: "+48", name: "Poland", flag: "🇵🇱" },
  { code: "+52", name: "Mexico", flag: "🇲🇽" },
  { code: "+60", name: "Malaysia", flag: "🇲🇾" },
  { code: "+62", name: "Indonesia", flag: "🇮🇩" },
  { code: "+63", name: "Philippines", flag: "🇵🇭" },
  { code: "+84", name: "Vietnam", flag: "🇻🇳" },
  { code: "+66", name: "Thailand", flag: "🇹🇭" },
  { code: "+852", name: "Hong Kong", flag: "🇭🇰" },
  { code: "+973", name: "Bahrain", flag: "🇧🇭" },
  { code: "+968", name: "Oman", flag: "🇴🇲" },
  { code: "+20", name: "Egypt", flag: "🇪🇬" },
  { code: "+234", name: "Nigeria", flag: "🇳🇬" },
  { code: "+254", name: "Kenya", flag: "🇰🇪" },
];

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    problem: "",
  });

  const [selectedCountry, setSelectedCountry] = useState<CountryCodeItem>(COUNTRY_CODES[0]);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const [countrySearch, setCountrySearch] = useState("");
  const [buildType, setBuildType] = useState<string | null>(null);
  const [contactMethod, setContactMethod] = useState<"Email" | "Call">("Email");
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: boolean }>({});

  const [modal, setModal] = useState<{
    isOpen: boolean;
    type: "error" | "success";
    title: string;
    message: string;
    fields?: string[];
    focusTarget?: string;
  }>({
    isOpen: false,
    type: "error",
    title: "",
    message: "",
  });

  const buildTypes = [
    "AI Employees",
    "Voice AI",
    "Digital Product",
    "Custom System",
    "Not sure yet",
  ];

  const filteredCountries = COUNTRY_CODES.filter(
    (c) =>
      c.name.toLowerCase().includes(countrySearch.toLowerCase()) ||
      c.code.includes(countrySearch)
  );

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (validationErrors[field]) {
      setValidationErrors((prev) => ({ ...prev, [field]: false }));
    }
  };

  const closeModal = () => {
    const target = modal.focusTarget;
    setModal((prev) => ({ ...prev, isOpen: false }));
    if (target) {
      setTimeout(() => {
        document.getElementById(target)?.focus();
      }, 100);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isCompletelyEmpty =
      !formData.name.trim() &&
      !formData.company.trim() &&
      !formData.mobile.trim() &&
      !formData.email.trim() &&
      !formData.problem.trim() &&
      !buildType;

    if (isCompletelyEmpty) {
      setValidationErrors({
        name: true,
        email: true,
        mobile: true,
        problem: true,
      });
      setModal({
        isOpen: true,
        type: "error",
        title: "Please Fill in the Fields",
        message:
          "You haven't filled in any fields yet. Please complete your details and describe what's slowing your business down so we can evaluate your request.",
        fields: [
          "01 / Full Name",
          "03 / Mobile Number or 04 / Email Address",
          "07 / What's slowing your business down",
        ],
        focusTarget: "name",
      });
      return;
    }

    const newErrors: { [key: string]: boolean } = {};
    const missingFields: string[] = [];

    if (!formData.name.trim()) {
      newErrors.name = true;
      missingFields.push("01 / Full Name");
    }

    const hasContact = formData.email.trim() || formData.mobile.trim();
    if (!hasContact) {
      newErrors.email = true;
      newErrors.mobile = true;
      missingFields.push("03 / Mobile Number or 04 / Email Address");
    } else if (
      formData.email.trim() &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())
    ) {
      newErrors.email = true;
      missingFields.push("A valid Email Address format");
    }

    if (!formData.problem.trim()) {
      newErrors.problem = true;
      missingFields.push("07 / What's slowing your business down");
    }

    if (missingFields.length > 0) {
      setValidationErrors(newErrors);
      setModal({
        isOpen: true,
        type: "error",
        title: "Please Complete the Required Fields",
        message:
          "To review your request and return a technical assessment within 24 hours, please fill in the following required fields:",
        fields: missingFields,
        focusTarget: newErrors.name ? "name" : newErrors.email ? "email" : "problem",
      });
      return;
    }

    // Success
    setValidationErrors({});
    setModal({
      isOpen: true,
      type: "success",
      title: "Problem Received",
      message: `Thank you, ${formData.name.trim()}. Your submission has been received. Our founding partners will review your architectural requirements and return a technical assessment within 24 hours.`,
    });

    // Reset form
    setFormData({
      name: "",
      company: "",
      mobile: "",
      email: "",
      problem: "",
    });
    setBuildType(null);
  };

  return (
    <div className="min-h-screen bg-black font-sans text-ivory antialiased selection:bg-copper selection:text-black">
      <Navigation />


      <main className="pt-32 md:pt-48 pb-32 md:pb-48">
        {/* ━━━ HERO ━━━ */}
        <section className="relative px-6 md:px-10 mx-auto max-w-[1400px]">
          <Reveal delay={0.1}>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe font-medium">
              <span className="text-copper">[</span> 07 / START A PROJECT <span className="text-copper">]</span>
            </div>
          </Reveal>

          <Reveal delay={0.2} className="mt-12 md:mt-20">
            <h1 className="font-sans text-[44px] sm:text-[64px] md:text-[84px] lg:text-[100px] font-[680] leading-[1.02] tracking-[-0.03em] text-ivory max-w-[1000px]">
              Bring us the problem that <span className="text-copper">doesn't scale.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.3} className="mt-8 md:mt-12 max-w-[600px]">
            <p className="text-[16px] md:text-[18px] leading-[1.7] text-taupe">
              Every submission is reviewed directly by our founding partners to determine architectural fit. If we can solve the operational friction, we will return a technical assessment within 24 hours.
            </p>
          </Reveal>

          <Reveal delay={0.4} className="mt-10 md:mt-14 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-12 border-t border-charcoal/40 pt-6">
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
              <span className="text-ivory">RESPONSE TIME</span> / WITHIN 24 HOURS
            </div>
            <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
              <span className="text-ivory">FOUNDING SLOTS</span> / LIMITED AVAILABILITY
            </div>
          </Reveal>
        </section>

        {/* ━━━ TWO-COLUMN LAYOUT ━━━ */}
        <section className="relative px-6 md:px-10 mx-auto max-w-[1400px] mt-24 md:mt-40">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-16 lg:gap-24 items-start">
            
            {/* LEFT COLUMN */}
            <div className="lg:sticky lg:top-32">
              <Reveal delay={0.1}>
                <p className="text-[20px] md:text-[24px] font-[500] leading-[1.4] tracking-[-0.01em] text-ivory max-w-[400px]">
                  We don't build generic features. We build intelligent systems that take on the actual weight of your operations.
                </p>
              </Reveal>

              <Reveal delay={0.2} className="mt-12 md:mt-16 flex flex-col gap-4">
                <div className="inline-flex items-center gap-4">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal opacity-50" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal" />
                  </span>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                    SYSTEM / <span className="text-ivory">INTAKE ACTIVE</span>
                  </div>
                </div>
                <div className="inline-flex items-center gap-4">
                  <span className="relative flex h-2 w-2">
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-charcoal" />
                  </span>
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                    NEXT / TECHNICAL REVIEW
                  </div>
                </div>
              </Reveal>
            </div>

            {/* RIGHT COLUMN - FORM */}
            <Reveal delay={0.2} className="w-full">
              <form 
                className="flex flex-col gap-12 md:gap-16 w-full max-w-[700px]"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* 1. Full Name */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                      01 / Full Name
                    </label>
                    {validationErrors.name && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-copper">
                        Required
                      </span>
                    )}
                  </div>
                  <input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-transparent border-b pb-4 text-[18px] md:text-[20px] text-ivory placeholder-taupe/40 outline-none transition-colors duration-300 rounded-none ${
                      validationErrors.name
                        ? "border-copper"
                        : focusedField === "name"
                        ? "border-copper"
                        : "border-charcoal"
                    }`}
                    placeholder="Jane Doe"
                  />
                </div>

                {/* 2. Business / Company Name */}
                <div className="flex flex-col gap-3">
                  <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                    02 / Business Name
                  </label>
                  <input
                    id="company"
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange("company", e.target.value)}
                    onFocus={() => setFocusedField("company")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-transparent border-b pb-4 text-[18px] md:text-[20px] text-ivory placeholder-taupe/40 outline-none transition-colors duration-300 rounded-none ${
                      focusedField === "company" ? "border-copper" : "border-charcoal"
                    }`}
                    placeholder="Acme Corporation"
                  />
                </div>

                {/* Grid for Mobile/Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-10">
                  {/* 3. Mobile Number */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="mobile" className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                        03 / Mobile Number
                      </label>
                      {validationErrors.mobile && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-copper">
                          Required contact
                        </span>
                      )}
                    </div>
                    <div className={`relative flex items-end border-b transition-colors duration-300 ${
                      validationErrors.mobile
                        ? "border-copper"
                        : focusedField === "mobile" || isCountryOpen
                        ? "border-copper"
                        : "border-charcoal"
                    }`}>
                      {/* Country Code Selector */}
                      <div className="relative shrink-0">
                        <button
                          type="button"
                          id="country-selector-btn"
                          onClick={() => setIsCountryOpen(!isCountryOpen)}
                          className="flex items-center gap-1.5 pb-4 font-mono text-[14px] text-ivory hover:text-copper transition-colors focus:outline-none cursor-pointer"
                          title="Select Country Calling Code"
                        >
                          <span className="text-[16px] leading-none">{selectedCountry.flag}</span>
                          <span className="leading-none">{selectedCountry.code}</span>
                          <span className={`text-[9px] text-taupe transition-transform duration-200 ${isCountryOpen ? "rotate-180" : ""}`}>
                            ▼
                          </span>
                        </button>

                        {/* Country Dropdown Menu */}
                        {isCountryOpen && (
                          <>
                            <div
                              className="fixed inset-0 z-40"
                              onClick={() => {
                                setIsCountryOpen(false);
                                setCountrySearch("");
                              }}
                            />
                            <div className="absolute left-0 bottom-full mb-3 z-50 w-72 max-h-72 overflow-hidden rounded-[3px] border border-charcoal/80 bg-[#121211] shadow-2xl backdrop-blur-md flex flex-col">
                              {/* Search Input */}
                              <div className="p-2.5 border-b border-charcoal/50 bg-[#171715]">
                                <input
                                  type="text"
                                  autoFocus
                                  value={countrySearch}
                                  onChange={(e) => setCountrySearch(e.target.value)}
                                  placeholder="Search country or code..."
                                  className="w-full bg-[#0E0E0D] px-2.5 py-1.5 text-[12px] font-mono text-ivory placeholder-taupe/50 outline-none rounded-[2px] border border-charcoal/50 focus:border-copper"
                                  onClick={(e) => e.stopPropagation()}
                                />
                              </div>
                              {/* Country List */}
                              <div className="overflow-y-auto max-h-56 divide-y divide-charcoal/20">
                                {filteredCountries.length > 0 ? (
                                  filteredCountries.map((c) => (
                                    <button
                                      key={`${c.name}-${c.code}`}
                                      type="button"
                                      onClick={() => {
                                        setSelectedCountry(c);
                                        setIsCountryOpen(false);
                                        setCountrySearch("");
                                      }}
                                      className={`flex w-full items-center justify-between px-3 py-2 text-left font-mono text-[12px] transition-colors cursor-pointer ${
                                        selectedCountry.name === c.name && selectedCountry.code === c.code
                                          ? "bg-copper/15 text-ivory"
                                          : "text-taupe hover:bg-white/5 hover:text-ivory"
                                      }`}
                                    >
                                      <span className="flex items-center gap-2 truncate">
                                        <span className="text-[14px]">{c.flag}</span>
                                        <span className="truncate text-ivory">{c.name}</span>
                                      </span>
                                      <span className="text-copper font-medium ml-2 shrink-0">{c.code}</span>
                                    </button>
                                  ))
                                ) : (
                                  <div className="px-3 py-4 text-center font-mono text-[11px] text-taupe">
                                    No matching country
                                  </div>
                                )}
                              </div>
                            </div>
                          </>
                        )}
                      </div>

                      <span className="text-charcoal/60 pb-4 px-2 select-none">|</span>

                      <input
                        id="mobile"
                        type="tel"
                        value={formData.mobile}
                        onChange={(e) => handleInputChange("mobile", e.target.value)}
                        onFocus={() => setFocusedField("mobile")}
                        onBlur={() => setFocusedField(null)}
                        className="w-full bg-transparent pb-4 text-[18px] md:text-[20px] text-ivory placeholder-taupe/40 outline-none rounded-none"
                        placeholder="555 0123 4567"
                      />
                    </div>
                  </div>

                  {/* 4. Email */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label htmlFor="email" className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                        04 / Email Address
                      </label>
                      {validationErrors.email && (
                        <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-copper">
                          Required contact
                        </span>
                      )}
                    </div>
                    <input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full bg-transparent border-b pb-4 text-[18px] md:text-[20px] text-ivory placeholder-taupe/40 outline-none transition-colors duration-300 rounded-none ${
                        validationErrors.email
                          ? "border-copper"
                          : focusedField === "email"
                          ? "border-copper"
                          : "border-charcoal"
                      }`}
                      placeholder="jane@acme.com"
                    />
                  </div>
                </div>

                {/* 5. What are you looking to build? */}
                <div className="flex flex-col gap-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                    05 / What are you looking to build?
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {buildTypes.map((type) => (
                      <button
                        key={type}
                        type="button"
                        onClick={() => setBuildType(type)}
                        className={`border px-5 py-3 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-300 rounded-[2px] cursor-pointer ${
                          buildType === type
                            ? "border-copper text-copper bg-copper/5"
                            : "border-charcoal text-taupe hover:border-taupe hover:text-ivory"
                        }`}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 6. Preferred contact method */}
                <div className="flex flex-col gap-5">
                  <div className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                    06 / Preferred Contact Method
                  </div>
                  <div className="flex gap-3">
                    {["Email", "Call"].map((method) => (
                      <button
                        key={method}
                        type="button"
                        onClick={() => setContactMethod(method as "Email" | "Call")}
                        className={`border px-6 py-3 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors duration-300 rounded-[2px] cursor-pointer ${
                          contactMethod === method
                            ? "border-ivory text-ivory bg-ivory/5"
                            : "border-charcoal text-taupe hover:border-taupe hover:text-ivory"
                        }`}
                      >
                        {method}
                      </button>
                    ))}
                  </div>
                </div>

                {/* 7. Textarea */}
                <div className="flex flex-col gap-3">
                  <div className="flex items-center justify-between">
                    <label htmlFor="problem" className="font-mono text-[11px] uppercase tracking-[0.15em] text-taupe">
                      07 / Tell us what's slowing your business down
                    </label>
                    {validationErrors.problem && (
                      <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-copper">
                        Required
                      </span>
                    )}
                  </div>
                  <textarea
                    id="problem"
                    value={formData.problem}
                    onChange={(e) => handleInputChange("problem", e.target.value)}
                    onFocus={() => setFocusedField("problem")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full bg-transparent border-b pt-2 pb-6 min-h-[140px] text-[18px] md:text-[20px] text-ivory placeholder-taupe/40 outline-none transition-colors duration-300 resize-none rounded-none ${
                      validationErrors.problem
                        ? "border-copper"
                        : focusedField === "problem"
                        ? "border-copper"
                        : "border-charcoal"
                    }`}
                    placeholder="Describe the workflow that currently requires too much manual intervention, or the bottleneck that's limiting your capacity."
                  ></textarea>
                </div>

                {/* 8. Submit Button */}
                <div className="mt-4">
                  <button
                    type="submit"
                    className="group inline-flex items-center justify-center gap-3 w-full md:w-auto bg-ivory border border-ivory px-10 py-5 text-[15px] font-medium text-black transition-all duration-300 hover:bg-copper hover:border-copper rounded-[4px] cursor-pointer"
                  >
                    Send the Problem
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </button>
                </div>
              </form>
            </Reveal>

          </div>
        </section>
      </main>

      {/* Validation & Feedback Popup Modal */}
      <AnimatePresence>
        {modal.isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm cursor-pointer"
            />

            {/* Modal Dialog Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-[500px] border border-charcoal/70 bg-[#0E0E0D] p-7 md:p-9 shadow-2xl rounded-[4px]"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-copper">
                  {modal.type === "error"
                    ? "[ 07 / EXCEPTION NOTICE ]"
                    : "[ 07 / SUBMISSION RECEIVED ]"}
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="text-taupe hover:text-ivory transition-colors text-[20px] leading-none px-1 cursor-pointer"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              </div>

              <h3 className="mt-4 font-sans text-[22px] md:text-[26px] font-[650] leading-snug tracking-[-0.02em] text-ivory">
                {modal.title}
              </h3>

              <p className="mt-3 text-[14px] md:text-[15px] leading-[1.65] text-taupe">
                {modal.message}
              </p>

              {modal.fields && modal.fields.length > 0 && (
                <div className="mt-5 border-t border-charcoal/40 pt-4">
                  <div className="font-mono text-[10px] uppercase tracking-[0.15em] text-taupe/80 mb-2.5">
                    Missing Fields:
                  </div>
                  <ul className="flex flex-col gap-2">
                    {modal.fields.map((f, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2.5 font-mono text-[12px] text-ivory"
                      >
                        <span className="text-copper font-bold">!</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="mt-8 flex justify-end">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full sm:w-auto bg-ivory px-7 py-3 text-[14px] font-medium text-black transition-all duration-300 hover:bg-copper hover:text-black rounded-[2px] cursor-pointer"
                >
                  {modal.type === "error" ? "Please fill the fields" : "Done"}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
