interface Props
{
    children: string;
    color?: 'primary' | 'danger';
    onClick: () => void;
}

const Button = ({children, onClick, color = 'danger'}:Props) => {
  return (
      <button onClick={ onClick } type="button" className={ 'btn btn-'+color }>{children}</button>
  )
}

export default Button