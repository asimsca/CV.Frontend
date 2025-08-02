export interface AuthorizeOTPRequest {
    refreshToken: string;
    otp: string;
}