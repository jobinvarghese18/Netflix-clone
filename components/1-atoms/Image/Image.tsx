import Img from 'next/image';

interface Props {
    url: string;
    height: number;
    width: number;
}
export const Image: React.FC<Props> = (props) => {
    const { height, width, url } = props;
    const myLoader = () => {
        return props.url;
    };
    return (
        <Img
            src={url}
            width={width}
            height={height}
            className="cursor-pointer object-contain"
            alt="logo"
            loader={myLoader}
        />
    );
};