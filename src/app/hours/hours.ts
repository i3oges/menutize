export interface OpenCloseTime {
    open: number;
    close: number;
}

export interface Hours {
    sunday: OpenCloseTime;
    monday: OpenCloseTime;
    tuesday: OpenCloseTime;
    wednesday: OpenCloseTime;
    thursday: OpenCloseTime;
    friday: OpenCloseTime;
    saturday: OpenCloseTime;
}
