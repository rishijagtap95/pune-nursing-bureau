import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface Inquiry {
    id: bigint;
    name: string;
    createdAt: bigint;
    phone: string;
    serviceNeeded: string;
}
export interface backendInterface {
    getInquiries(): Promise<Array<Inquiry>>;
    submitInquiry(name: string, phone: string, serviceNeeded: string): Promise<void>;
}
