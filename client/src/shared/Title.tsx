/* eslint-disable react/require-default-props */
import Button from './Button';
import Wrapper from './styles/Title.styles';

type TitleProps = {
  title: string;
  buttonTitle?: string;
  unbuttoned?: string;
  url?: string;
};

function Title({ title, unbuttoned = '', buttonTitle, url }: TitleProps) {
  return (
    <Wrapper style={{ '--center': unbuttoned && 'center' }}>
      <div className="max-container">
        <p>{title}</p>

        {!unbuttoned && (
          <div className="button-container">
            <Button title={buttonTitle!} url={url!} />
          </div>
        )}
      </div>
    </Wrapper>
  );
}

export default Title;
