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
    message: string;
}

export interface authStateProps {
    userInfo: UserProps | null;
}

export interface resTypeProps {
    userInfo: UserProps;
}

export interface categoryResTypeProps {
    _id: string;
    name: string;
    description: string;
    image: string;
    createdAt: string;
    updatedAt: string;
}

export interface productResTypeProps {
    _id: string;
    name: string;
    description: string;
    images: [
        {
            public_id: string;
            secure_url: string;
        }
    ];
    seller: string;
    price: number;
    isApproved: boolean;
    category: string;
    status: 'available' | 'sold' | 'lent' | 'pending';
    createdAt: string;
    updatedAt: string;
}

export interface paramsProps {
    keyword: string;
    page: number;
}

export interface ProductCardProps {
    products: productResTypeProps[];
    filteredProductCount: number;
    resPerPage: number;
}
