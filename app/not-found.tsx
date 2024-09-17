import { Metadata } from "next";

export const metadata: Metadata = {
  title: '404',
};

export default function NotFound() {
  /* TODO:  */
  return (
    <div className="content-center text-center py-5">
      <p className="text-3xl mb-6">404</p>
      <p className="text-2xl italic">Not Found</p>
    </div>
  );
}
