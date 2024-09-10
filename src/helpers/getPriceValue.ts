interface PriceProps {
    searchParams: URLSearchParams;
    key: string;
    value: string | null;
}
export const getPriceValue = ({ searchParams, key, value }: PriceProps) => {
    const hasValue = searchParams.has(key);
    console.log(searchParams, key, value);
    if (hasValue && value) {
        searchParams.set(key, value);
    } else if (value) {
        searchParams.append(key, value);
    } else if (hasValue) {
        searchParams.delete(key);
    }

    return searchParams;
};
