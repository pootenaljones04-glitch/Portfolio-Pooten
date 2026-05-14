export default function PortfolioWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 font-sans">
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="w-36 h-36 rounded-full bg-white mx-auto mb-6 flex items-center justify-center text-5xl font-bold text-blue-700 shadow-lg">
            AJ
          </div>

          <h1 className="text-5xl font-bold mb-4">AL JONES T. POOTEN</h1>

          <p className="text-xl max-w-3xl mx-auto leading-relaxed">
            Aspiring Virtual Assistant | Data Entry Specialist | Administrative Support | Basic Web Developer
          </p>
        </div>
      </section>

      <section className="py-16 px-6 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">Java Project</h3>
            <p>Add your screenshots and project details here.</p>
          </div>

          <div className="bg-white p-6 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-semibold mb-3">PHP System</h3>
            <p>Add your website screenshots and links here.</p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-10 text-center">
        <p>Email: pootenaljones04@gmail.com</p>
        <p>Phone: 09387111056</p>
      </footer>
    </div>
  );
}
