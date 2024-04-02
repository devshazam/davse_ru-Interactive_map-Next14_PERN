import { Button, Result } from 'antd';

const NotFound = () => {
  return   <Result
  status="404"
  title="404"
  subTitle="Такой страницы на сайте нет!"
  // extra={<Button type="primary">НА ГЛАВНУЮ!</Button>}
/>;
};

export default NotFound;
