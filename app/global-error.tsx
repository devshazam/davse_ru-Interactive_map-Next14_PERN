'use client'
import { Button, Result } from 'antd';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {

    // TODO сделатьобработку ошибок  с записью их в БД
  return (
    <html>
      <body>
        <div className='flex min-h-screen justify-center items-center'>
      <Result
            status="403"
            title="403"
            subTitle="ГЛОБАЛЬНАЯ ОШИБКА"
            extra={<Button type="primary" onClick={() => reset()}>На ГЛАВНУЮ!</Button>}
        />
        </div>

      </body>
    </html>
  )
}