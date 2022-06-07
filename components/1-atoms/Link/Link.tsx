import Link from "next/link";

interface Props {
  children: React.ReactNode,
  to: string
}
export const LinkButton: React.FC = (props: Props): JSX.Element => {
  const { children, to } = props;

  return (
    <Link href={to}>{children}</Link>
  );
};
