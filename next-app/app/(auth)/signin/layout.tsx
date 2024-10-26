export default function ({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <div className="border-b text-center w-full">20% off for the diwali days</div>
      {children}
    </div>
  );
}
