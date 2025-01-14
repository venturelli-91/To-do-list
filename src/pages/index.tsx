"use client"
import TodoWrap from '@/components/TodoWrap';
import styles from '@/pages/_app';


export default function Home() {
  return (
    
    <div className={styles.page}>
      <main className={styles.main}>
      
        <TodoWrap></TodoWrap>

      </main>
    </div>
  );
}