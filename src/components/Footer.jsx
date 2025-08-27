export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Company</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#about">About</a></li>
              <li><a className="hover:text-gray-900" href="#support">Support</a></li>
              <li><a className="hover:text-gray-900" href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#products">All robots</a></li>
              <li><a className="hover:text-gray-900" href="#products">Accessories</a></li>
              <li><a className="hover:text-gray-900" href="#products">SDK</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Resources</h4>
            <ul className="mt-3 space-y-2 text-sm text-gray-600">
              <li><a className="hover:text-gray-900" href="#">Docs</a></li>
              <li><a className="hover:text-gray-900" href="#">API Status</a></li>
              <li><a className="hover:text-gray-900" href="#">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-gray-900">Newsletter</h4>
            <p className="mt-3 text-sm text-gray-600">Get product updates, launch invites, and community news.</p>
            <form className="mt-3 flex gap-2">
              <input type="email" required placeholder="you@example.com" className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500/30" />
              <button className="whitespace-nowrap rounded-lg bg-gray-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-black">Subscribe</button>
            </form>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-gray-200 pt-6 text-sm text-gray-600 sm:flex-row">
          <p>© {new Date().getFullYear()} Axiom Robotics. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-gray-900">Terms</a>
            <a href="#" className="hover:text-gray-900">Privacy</a>
            <a href="#" className="hover:text-gray-900">Imprint</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
