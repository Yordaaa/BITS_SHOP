export interface UserProps {
    schoolId: string;
    password: string;
    firstName?: string;
    lastName: string;
    email?: string;
    username?: string;
    phoneNumber?: string;
    

}
export interface LoginUserInputProps {
    schoolId: string;
    password: string;
}

export interface RegistrationInputProps {

    firstName?: string;
    lastName: string;
    email?: string;
    schoolId?: string;
    password?: string;
    confirmPassword?: string;
    username?: string;
    phoneNumber?: string;
}

export interface RegistrationResponseProps {
    success: boolean;
    message?: string;
}

export interface authStateProps {
    userInfo: UserProps | null;
}

export interface resTypeProps {
    success: true;
    userInfo: UserProps;
}
