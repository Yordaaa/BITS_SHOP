export interface UserProps {
    schoolId: string;
    password: string;
    profile?: {
        firstName?: string;
        lastName: string;
        email?: string; 
        username?: string;
    };
}

export interface LoginUserInputProps {
    password: string;
    schoolId: string;
}

export interface RegistrationInputProps {

    firstName?: string;
    lastName: string;
    email?: string;
    schoolId?: string;
    username?: string;
    password?: string;
    confirmPassword?: string;
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
