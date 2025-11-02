// app/not-found.tsx
import Link from 'next/link';
import Header from '@/app/components/Header';
import Footer from '@/app/components/Footer';
import styles from './NotFound.module.css';
import { BsArrowLeft } from 'react-icons/bs';
import { getDictionary } from '@/get-dictionary';

// 这是一个简单、健壮的 404 页面
export default async function NotFound() {
  // 我们只加载默认的英文词典用于 Header 和 Footer
  const dictionary = await getDictionary('en'); 

  return (
    <>
      {/* 这里的 Header/Footer 使用默认语言 */}
      <Header lang="en" t={dictionary.header} />
      <main className={styles.container}>
        <div className={styles.content}>
          <p className={styles.errorCode}>404</p>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.message}>
            Oops! The page you are looking for does not exist. It might have been moved or deleted.
          </p>
          {/* 链接到根目录，中间件会自动处理语言重定向 */}
          <Link href="/" className={styles.homeButton}>
            <BsArrowLeft />
            Go Back Home
          </Link>
        </div>
      </main>
      <Footer t={dictionary.footer} lang="en" />
    </>
  );
}