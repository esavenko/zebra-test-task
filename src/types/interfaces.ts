export interface INews {
    name: string;
    code: string;
    previewText: string;
    type: {
        value: string;
        xmlId: string;
    };
    date: number;
    image: string;
}
