'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
import { Button, Result } from 'antd';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 

  // TODO  кого использовать глобал или не глобал ошибки
  return (
    <div className='flex min-h-screen justify-center items-center'>
      <Result 
        status="403"
        title="403"
        subTitle="КОРНЕВАЯ ОШИБКА"
        extra={<Button type="primary" onClick={() => reset()}>На ГЛАВНУЮ!</Button>}
      /></div>
  )
}