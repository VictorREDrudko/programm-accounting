type IconPropsType = {
  path: string
}

export const Icon: React.FC<IconPropsType> = (props: IconPropsType) => {
  return (
    <img src={props.path} alt="Иконка" />
  )
}