import Footer from "@/components/Footer";

export const metadata = {
  title: "Landon | About"
};
export default function Layout({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  );
}
