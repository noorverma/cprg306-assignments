import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <div>
      <Link href="/week-2">
        Go to Week 2 Assignment
      </Link></div>
      <div>
      <Link href="/week-3">
        Go to Week 3 Assignment
        </Link></div>
      <div>
        <Link href="/week-4">
        Go to Week 4 Assignment
        </Link>
      </div>
      <div>
        <Link href="/week-5">
        Go to Week 5 Assignment 
        </Link>
      </div>
      <div>
        <Link href="/week-6">
        Go to Week 6 Assignment 
        </Link>
      </div>
      <div>
        <Link href="/week-7">
        Go to Week 7 Assignment 
        </Link>
      </div>
      <div>
        <Link href="/week-8">
        Go to Week 8 Assignment 
        </Link>
      </div>
      <div>
        <Link href="/week-9">
        Go to Week 9 Assignment 
        </Link>
      </div>
    </main>
  );
}