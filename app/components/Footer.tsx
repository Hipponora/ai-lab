export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-12 text-sm text-gray-600">
        <div className="flex flex-col md:flex-row justify-between gap-6">
          
          <div>
            <p className="font-semibold text-gray-900">BarnStorm</p>
            <p className="mt-2 max-w-xs">
              Building AI-powered digital products designed to scale with
              ambition.
            </p>
          </div>

          <div className="flex gap-12">
            <div className="flex flex-col gap-2">
              <span className="font-medium text-gray-900">Company</span>
              <span>About</span>
              <span>Solutions</span>
              <span>Contact</span>
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-medium text-gray-900">Legal</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>
        </div>

        <p className="mt-10 text-xs text-gray-400">
          © {new Date().getFullYear()} NovaWorks. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
