export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    pointer?:string;
    cursor?:string;
}

export interface  IButtonStyles{
    pointer:string;
    cursor:string;
}