








// import React, { useState } from "react";
// import { Eye, EyeOff, Calendar, ChevronDown } from "lucide-react";
// import tyson from "../../assets/MikeTyson.png"

// const SignupForm = () => {
//   const [currentStep, setCurrentStep] = useState(1);
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});

//   const [formData, setFormData] = useState({
//     // Account Details
//     email: "",
//     username: "",
//     password: "",
//     confirmPassword: "",
//     tcKimlik: "",
//     dateOfBirth: "",

//     // User Details
//     firstName: "",
//     surname: "",
//     streetAddress: "",
//     city: "",
//     country: "India",

//     // Contact Details
//     countryCode: "+91",
//     mobilePhone: "",
//     securityQuestion: "",
//     securityAnswer: "",
//     emailPromotions: false,
//     smsVerification: false,
//   });

//   const handleInputChange = (field, value) => {
//     setFormData((prev) => ({ ...prev, [field]: value }));
//     // Clear error when user starts typing
//     if (errors[field]) {
//       setErrors((prev) => ({ ...prev, [field]: "" }));
//     }
//   };

//   const validateStep = (step) => {
//     const newErrors = {};

//     if (step === 1) {
//       if (!formData.email) newErrors.email = "This field is required.";
//       else if (!/\S+@\S+\.\S+/.test(formData.email))
//         newErrors.email = "Please enter a valid email address.";

//       if (!formData.username) newErrors.username = "This field is required.";
//       if (!formData.password) newErrors.password = "This field is required.";
//       if (!formData.confirmPassword)
//         newErrors.confirmPassword = "This field is required.";
//       else if (formData.password !== formData.confirmPassword)
//         newErrors.confirmPassword = "Passwords do not match.";

//       if (!formData.tcKimlik) newErrors.tcKimlik = "This field is required.";
//       if (!formData.dateOfBirth)
//         newErrors.dateOfBirth = "This field is required.";
//     }

//     if (step === 2) {
//       if (!formData.firstName) newErrors.firstName = "This field is required.";
//       if (!formData.surname) newErrors.surname = "This field is required.";
//       if (!formData.streetAddress)
//         newErrors.streetAddress = "This field is required.";
//       if (!formData.city) newErrors.city = "This field is required.";
//       if (!formData.country) newErrors.country = "This field is required.";
//     }

//     if (step === 3) {
//       if (!formData.mobilePhone)
//         newErrors.mobilePhone = "This field is required.";
//       if (!formData.securityQuestion)
//         newErrors.securityQuestion = "This field is required.";
//       if (!formData.securityAnswer)
//         newErrors.securityAnswer = "This field is required.";
//     }

//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const handleNext = () => {
//     if (validateStep(currentStep)) {
//       setCurrentStep((prev) => prev + 1);
//     }
//   };

//   const handleSubmit = () => {
//     if (validateStep(currentStep)) {
//       console.log("Registration Data:", formData);
//       alert("Registration completed!");
//     }
//   };

//   const StepIndicator = () => (
//     <div className="flex items-center justify-center lg:justify-end mb-6 lg:mr-16">
//       {[1, 2, 3].map((step, index) => (
//         <React.Fragment key={step}>
//           <div
//             className={`w-7 h-7 rounded flex items-center justify-center text-sm font-medium border-2 border-gray-400  ${
//               step === currentStep
//                 ? "bg-[#244309] text-white"
//                 : step < currentStep
//                 ? "bg-[#244309] text-white"
//                 : "bg-[#0000000] text-gray-400"
//             }`}
//           >
//             {step}
//           </div>
//           {index < 2 && <div className="w-6 h-0.5 bg-gray-300 mx-2" />}
//         </React.Fragment>
//       ))}
//     </div>
//   );

//   const InputField = ({
//     label,
//     type = "text",
//     field,
//     placeholder = "",
//     required = true,
//     children,
//   }) => (
//     <div className="mb-3">
//       <label className="block text-sm text-gray-700 mb-1">
//         {required && <span className="text-red-500">*</span>}
//         {label}
//       </label>
//       {children || (
//         <input
//           type={type}
//           value={formData[field] || ""}
//           onChange={(e) => handleInputChange(field, e.target.value)}
//           placeholder={placeholder}
//           className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
//         />
//       )}
//       {errors[field] && (
//         <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
//       )}
//     </div>
//   );

//   const Step1 = () => (
//     <div>
//       <h2 className="text-lg font-medium mb-4 text-gray-800">
//         Account Details
//       </h2>

//       <InputField label="Email:" field="email" type="email" />
//       <InputField label="Username" field="username" />

//       <InputField label="Password" field="password">
//         <div className="relative">
//           <input
//             type={showPassword ? "text" : "password"}
//             value={formData.password || ""}
//             onChange={(e) => handleInputChange("password", e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] pr-10 text-sm"
//           />
//           <button
//             type="button"
//             onClick={() => setShowPassword(!showPassword)}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//           </button>
//         </div>
//       </InputField>

//       <InputField label="Confirm password" field="confirmPassword">
//         <div className="relative">
//           <input
//             type={showConfirmPassword ? "text" : "password"}
//             value={formData.confirmPassword || ""}
//             onChange={(e) =>
//               handleInputChange("confirmPassword", e.target.value)
//             }
//             className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] pr-10 text-sm"
//           />
//           <button
//             type="button"
//             onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
//           >
//             {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
//           </button>
//         </div>
//       </InputField>

//       <InputField label="TC Kimlik No:" field="tcKimlik" />

//       <InputField label="Date of birth:" field="dateOfBirth">
//         <div className="relative">
//           <input
//             type="date"
//             value={formData.dateOfBirth || ""}
//             onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
//           />
//           <Calendar
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
//             size={16}
//           />
//         </div>
//       </InputField>
//     </div>
//   );

//   const Step2 = () => (
//     <div>
//       <h2 className="text-lg font-medium mb-4 text-gray-800">User Details</h2>

//       <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
//         <InputField label="First name" field="firstName" />
//         <InputField label="Surname" field="surname" />
//       </div>

//       <InputField label="Street & house number" field="streetAddress" />
//       <InputField label="City" field="city" />

//       <InputField label="Country" field="country">
//         <div className="relative">
//           <select
//             value={formData.country || "India"}
//             onChange={(e) => handleInputChange("country", e.target.value)}
//             className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] appearance-none text-sm"
//           >
//             <option value="India">India</option>
//             <option value="Turkey">Turkey</option>
//             <option value="USA">USA</option>
//             <option value="UK">UK</option>
//           </select>
//           <ChevronDown
//             className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
//             size={16}
//           />
//         </div>
//       </InputField>
//     </div>
//   );

//   const Step3 = () => (
//     <div>
//       <h2 className="text-lg font-medium mb-4 text-gray-800">
//         Contact Details
//       </h2>

//       <InputField label="Mobile phone" field="mobilePhone">
//         <div className="flex">
//           <div className="relative">
//             <select
//               value={formData.countryCode || "+91"}
//               onChange={(e) => handleInputChange("countryCode", e.target.value)}
//               className="px-3 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] appearance-none bg-white text-sm w-20"
//             >
//               <option value="+91">+91</option>
//               <option value="+90">+90</option>
//               <option value="+1">+1</option>
//               <option value="+44">+44</option>
//             </select>
//             <ChevronDown
//               className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
//               size={12}
//             />
//           </div>
//           <input
//             type="tel"
//             value={formData.mobilePhone || ""}
//             onChange={(e) => handleInputChange("mobilePhone", e.target.value)}
//             className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
//           />
//         </div>
//         <p className="text-xs text-gray-500 mt-1">
//           Lütfen doğru numaranız SMS onayı yapılarak üyeliğinizi tamamlayınız.
//           SMS onayı yapılmayan hesap güvenliği için önerilmez.
//         </p>
//       </InputField>

//       <InputField label="Security question" field="securityQuestion" />
//       <InputField label="Security answer" field="securityAnswer" />

//       <div className="mb-3">
//         <label className="flex items-start space-x-2">
//           <input
//             type="checkbox"
//             checked={formData.emailPromotions || false}
//             onChange={(e) =>
//               handleInputChange("emailPromotions", e.target.checked)
//             }
//             className="mt-0.5 h-4 w-4 text-green-[#244309] focus:ring-[#244309] border-gray-300 rounded"
//           />
//           <span className="text-xs text-gray-700">
//             Yes, I would like to receive emails about offers and other
//             promotions (revocable at any time, e.g. in the account settings).
//           </span>
//         </label>
//       </div>

//       <div className="mb-4">
//         <label className="flex items-center space-x-2">
//           <input
//             type="checkbox"
//             checked={formData.smsVerification || false}
//             onChange={(e) =>
//               handleInputChange("smsVerification", e.target.checked)
//             }
//             className="h-4 w-4 text-green-[#244309] focus:ring-[#244309] border-gray-300 rounded"
//           />
//           <span className="text-xs text-gray-700">
//             I want to become a member with SMS verification
//           </span>
//         </label>
//       </div>
//     </div>
//   );


//   return (
//     <div className="min-h-screen lg:bg-gray-200 sm:bg-white">
//       {/* Mobile/Tablet Banner - Shows only on smaller screens */}
//       <div className="lg:hidden">
//         <div className="relative h-32 sm:h-40">
//           <img 
//             className="w-full h-full object-cover opacity-100" 
//             src={tyson} 
//             alt="Mike Tyson Banner" 
//           />
        
//         </div>
//       </div>

//       {/* Main Container */}
//       <div className="flex items-center justify-center p-4 sm:p-0 lg:p-8 lg:min-h-screen">
//         <div className="lg:bg-white sm:bg-transparent lg:shadow-lg sm:shadow-none  overflow-hidden flex flex-col lg:flex-row max-w-6xl w-full lg:min-h-[600px]">
          
//           {/* Form Section */}
//           <div className="w-full lg:w-3/4 p-4 sm:p-6 lg:p-8">
//             <StepIndicator />

//             <div className="max-w-full lg:max-w-sm mx-auto">
//               {currentStep === 1 && <Step1 />}
//               {currentStep === 2 && <Step2 />}
//               {currentStep === 3 && <Step3 />}

//               <button
//                 onClick={currentStep === 3 ? handleSubmit : handleNext}
//                 className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 rounded-sm transition-colors duration-200 text-sm mt-4"
//               >
//                 {currentStep === 3 ? "Register now!" : "Next*"}
//               </button>

//               <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
//                 Clicking the Register button will be deemed to have been accepted by{" "}
//                 <span className="underline text-yellow-600 cursor-pointer">
//                   Terms & Conditions
//                 </span>
//               </p>
//             </div>
//           </div>

//           {/* Desktop Image Section - Shows only on large screens */}
//           <div className="hidden lg:block lg:w-1/3 relative">
//             <div className="w-full h-full flex justify-end">
//               <img 
//                 className="w-full h-full object-cover" 
//                 src={tyson} 
//                 alt="Mike Tyson" 
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignupForm;















import React, { useState } from "react";
import { Eye, EyeOff, Calendar, ChevronDown } from "lucide-react";
import tyson from "../../assets/MikeTyson.png"

const SignupForm = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    tcKimlik: "",
    dateOfBirth: "",
    firstName: "",
    surname: "",
    streetAddress: "",
    city: "",
    country: "India",
    countryCode: "+91",
    mobilePhone: "",
    securityQuestion: "",
    securityAnswer: "",
    emailPromotions: false,
    smsVerification: false,
  });

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateStep = (step) => {
    const newErrors = {};

    if (step === 1) {
      if (!formData.email) newErrors.email = "This field is required.";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        newErrors.email = "Please enter a valid email address.";

      if (!formData.username) newErrors.username = "This field is required.";
      if (!formData.password) newErrors.password = "This field is required.";
      if (!formData.confirmPassword)
        newErrors.confirmPassword = "This field is required.";
      else if (formData.password !== formData.confirmPassword)
        newErrors.confirmPassword = "Passwords do not match.";

      if (!formData.tcKimlik) newErrors.tcKimlik = "This field is required.";
      if (!formData.dateOfBirth)
        newErrors.dateOfBirth = "This field is required.";
    }

    if (step === 2) {
      if (!formData.firstName) newErrors.firstName = "This field is required.";
      if (!formData.surname) newErrors.surname = "This field is required.";
      if (!formData.streetAddress)
        newErrors.streetAddress = "This field is required.";
      if (!formData.city) newErrors.city = "This field is required.";
      if (!formData.country) newErrors.country = "This field is required.";
    }

    if (step === 3) {
      if (!formData.mobilePhone)
        newErrors.mobilePhone = "This field is required.";
      if (!formData.securityQuestion)
        newErrors.securityQuestion = "This field is required.";
      if (!formData.securityAnswer)
        newErrors.securityAnswer = "This field is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (validateStep(currentStep)) {
      console.log("Registration Data:", formData);
      alert("Registration completed!");
    }
  };

  const StepIndicator = () => (
    <div className="flex items-center justify-center lg:justify-end mb-6 lg:mr-16">
      {[1, 2, 3].map((step, index) => (
        <React.Fragment key={step}>
          <div
            className={`w-7 h-7 rounded flex items-center justify-center text-sm font-medium border-2 border-gray-400  ${
              step === currentStep
                ? "bg-[#244309] text-white"
                : step < currentStep
                ? "bg-[#244309] text-white"
                : "bg-[#0000000] text-gray-400"
            }`}
          >
            {step}
          </div>
          {index < 2 && <div className="w-6 h-0.5 bg-gray-300 mx-2" />}
        </React.Fragment>
      ))}
    </div>
  );

  const InputField = ({ label, type = "text", field, placeholder = "", required = true, children }) => {
    const handleChange = (e) => handleInputChange(field, e.target.value);

    return (
      <div className="mb-3">
        <label className="block text-sm text-gray-700 mb-1">
          {required && <span className="text-red-500">*</span>}
          {label}
        </label>
        {children || (
          <input
            type={type}
            value={formData[field] || ""}
            onChange={handleChange}
            placeholder={placeholder}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
          />
        )}
        {errors[field] && (
          <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
        )}
      </div>
    );
  };

  const Step1 = () => (
    <div>
      <h2 className="text-lg font-medium mb-4 text-gray-800">Account Details</h2>
      <InputField label="Email:" field="email" type="email" />
      <InputField label="Username" field="username" />
      <InputField label="Password" field="password">
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            value={formData.password}
            onChange={(e) => handleInputChange("password", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] pr-10 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </InputField>
      <InputField label="Confirm password" field="confirmPassword">
        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            value={formData.confirmPassword}
            onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] pr-10 text-sm"
          />
          <button
            type="button"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
        </div>
      </InputField>
      <InputField label="TC Kimlik No:" field="tcKimlik" />
      <InputField label="Date of birth:" field="dateOfBirth">
        <div className="relative">
          <input
            type="date"
            value={formData.dateOfBirth}
            onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
          />
          <Calendar
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>
      </InputField>
    </div>
  );

  const Step2 = () => (
    <div>
      <h2 className="text-lg font-medium mb-4 text-gray-800">User Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
        <InputField label="First name" field="firstName" />
        <InputField label="Surname" field="surname" />
      </div>

      <InputField label="Street & house number" field="streetAddress" />
      <InputField label="City" field="city" />

      <InputField label="Country" field="country">
        <div className="relative">
          <select
            value={formData.country || "India"}
            onChange={(e) => handleInputChange("country", e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] appearance-none text-sm"
          >
            <option value="India">India</option>
            <option value="Turkey">Turkey</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
          </select>
          <ChevronDown
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
            size={16}
          />
        </div>
      </InputField>
    </div>
  );

  const Step3 = () => (
    <div>
      <h2 className="text-lg font-medium mb-4 text-gray-800">
        Contact Details
      </h2>

      <InputField label="Mobile phone" field="mobilePhone">
        <div className="flex">
          <div className="relative">
            <select
              value={formData.countryCode || "+91"}
              onChange={(e) => handleInputChange("countryCode", e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-l-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] appearance-none bg-white text-sm w-20"
            >
              <option value="+91">+91</option>
              <option value="+90">+90</option>
              <option value="+1">+1</option>
              <option value="+44">+44</option>
            </select>
            <ChevronDown
              className="absolute right-1 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none"
              size={12}
            />
          </div>
          <input
            type="tel"
            value={formData.mobilePhone || ""}
            onChange={(e) => handleInputChange("mobilePhone", e.target.value)}
            className="flex-1 px-3 py-2 border border-l-0 border-gray-300 rounded-r-sm focus:outline-none focus:ring-1 focus:ring-[#244309]/80 focus:border-[#244309] text-sm"
          />
        </div>
        <p className="text-xs text-gray-500 mt-1">
          Lütfen doğru numaranız SMS onayı yapılarak üyeliğinizi tamamlayınız.
          SMS onayı yapılmayan hesap güvenliği için önerilmez.
        </p>
      </InputField>

      <InputField label="Security question" field="securityQuestion" />
      <InputField label="Security answer" field="securityAnswer" />

      <div className="mb-3">
        <label className="flex items-start space-x-2">
          <input
            type="checkbox"
            checked={formData.emailPromotions || false}
            onChange={(e) =>
              handleInputChange("emailPromotions", e.target.checked)
            }
            className="mt-0.5 h-4 w-4 text-green-[#244309] focus:ring-[#244309] border-gray-300 rounded"
          />
          <span className="text-xs text-gray-700">
            Yes, I would like to receive emails about offers and other
            promotions (revocable at any time, e.g. in the account settings).
          </span>
        </label>
      </div>

      <div className="mb-4">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.smsVerification || false}
            onChange={(e) =>
              handleInputChange("smsVerification", e.target.checked)
            }
            className="h-4 w-4 text-green-[#244309] focus:ring-[#244309] border-gray-300 rounded"
          />
          <span className="text-xs text-gray-700">
            I want to become a member with SMS verification
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <div className="h-auto lg:bg-gray-200 sm:bg-white">
      <div className="lg:hidden">
        <div className="relative h-32 sm:h-40">
          <img
            className="w-full h-full object-cover opacity-100"
            src={tyson}
            alt="Mike Tyson Banner"
          />
        </div>
      </div>

      <div className="flex items-center justify-center p-4 sm:p-0 lg:p-8 lg:min-h-screen">
        <div className="lg:bg-white sm:bg-transparent lg:shadow-lg sm:shadow-none overflow-hidden flex flex-col lg:flex-row max-w-6xl w-full lg:min-h-[600px]">
          <div className="w-full lg:w-3/4 p-4 sm:p-6 lg:p-8">
            <StepIndicator />
            <div className="max-w-full lg:max-w-sm mx-auto">
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 />}
              {currentStep === 3 && <Step3 />}

              <button
                onClick={currentStep === 3 ? handleSubmit : handleNext}
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-medium py-3 rounded-sm transition-colors duration-200 text-sm mt-4"
              >
                {currentStep === 3 ? "Register now!" : "Next*"}
              </button>

              <p className="text-xs text-gray-500 mt-3 text-center leading-relaxed">
                Clicking the Register button will be deemed to have been accepted by{" "}
                <span className="underline text-yellow-600 cursor-pointer">
                  Terms & Conditions
                </span>
              </p>
            </div>
          </div>

          <div className="hidden lg:block lg:w-1/3 relative">
            <div className="w-full h-full flex justify-end">
              <img
                className="w-full h-full object-cover"
                src={tyson}
                alt="Mike Tyson"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
