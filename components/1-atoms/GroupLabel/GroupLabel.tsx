interface Props {
  label: string;
}
export const GroupLabel = (props: Props) => {
  const { label } = props;
  return <div> {label}</div>;
};
