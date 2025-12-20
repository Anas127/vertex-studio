import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function Legal() {
  return (
    <main className="min-h-screen bg-slate-50 py-24 px-6 md:px-12">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-indigo-600 font-bold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-12">Legal Information</h1>

        <div className="space-y-12 text-slate-600 leading-relaxed">
          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Privacy Policy</h2>
            <p className="mb-4">
              Last updated: November 20, 2025.
            </p>
            <p className="mb-4">
              At Vertex Studio, we value your privacy. We only collect information necessary to communicate with you regarding your project inquiries. This primarily includes your name and email address provided via our contact methods.
            </p>
            <p>
              We do not sell, trade, or transfer your personal data to outside parties. Your information is used solely for the purpose of business correspondence and project execution.
            </p>
          </section>

          <hr className="border-slate-200" />

          <section>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Terms of Service</h2>
            <p className="mb-4">
              By engaging with Vertex Studio for digital services, you agree to the following terms:
            </p>
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>Payment:</strong> A deposit is required to commence work, with the balance due upon project completion.</li>
              <li><strong>Revisions:</strong> We provide a set number of revisions as outlined in our specific project proposals.</li>
              <li><strong>Intellectual Property:</strong> Upon full payment, all rights to the developed code and design are transferred to the client.</li>
              <li><strong>Limitation of Liability:</strong> Vertex Studio is not liable for any indirect, special, or consequential damages arising out of the use of our services.</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}