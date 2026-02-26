// src/components/Footer.tsx

interface FooterProps {
  rights?: string;
}

export default function Footer({ rights = 'All rights reserved' }: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-gray-200 py-8">
      <div className="mx-auto max-w-7xl px-6 text-center text-sm text-gray-500">
        <p>
          &copy; {year} website-v0. {rights}.
        </p>
      </div>
    </footer>
  );
}
