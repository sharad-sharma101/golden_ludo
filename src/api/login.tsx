export default function loginRequest(otp: string) {
    localStorage.setItem("accessToken", otp);
}