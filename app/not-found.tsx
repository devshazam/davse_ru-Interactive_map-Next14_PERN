import { Button, Result } from 'antd';

const NotFound = () => {
  return (
      <div className='flex min-h-screen justify-center items-center'><Result
      status="404"
      title="404"
      subTitle="Такой страницы на сайте нет!"
      // extra={<Button type="primary">НА ГЛАВНУЮ!</Button>}
    />
    </div>
);
};

export default NotFound;
