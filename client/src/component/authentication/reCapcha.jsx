import ReCAPTCHA from "react-google-recaptcha";

const handleRecaptchaVerify = (response) => {
  console.log("reCAPTCHA response:", response);
  // Perform additional validation or actions based on the reCAPTCHA response
};

const ReCapcha = () => {
  return (
    <div>
      <ReCAPTCHA
        sitekey="6LfQDJcmAAAAAEYlMJYBVFmdk_XM37QPhxlxbK6t"
        onChange={handleRecaptchaVerify}
      />
      {/* <button type="submit">Submit</button> */}
    </div>
  );
};

export default ReCapcha;
