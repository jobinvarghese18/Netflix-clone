import tw from 'twin.macro';

interface Props {
    children: React.ReactNode;
    text: string;
}

const Btn = tw.button`text-sm flex flex-row justify-center items-center rounded bg-white text-black  gap-x-2 px-5 py-1.5 font-semibold transition-all hover:opacity-75 md:py-2.5 md:px-8 md:text-xl`;

export const Button = (props: Props) => {
    return (
        <Btn type='button'>
            <p>{props.text}</p>
            <div> {props.children} </div>
        </Btn>
    );
};




