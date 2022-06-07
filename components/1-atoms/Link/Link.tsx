import NextLink from "next/link";

interface Props {
  children?: React.ReactNode;
  to: string;
}
export const Link: React.FC<Props> = (props) => {
  const { to } = props;

  return (
    <NextLink href={to}>{props?.children}</NextLink>
  );
};
