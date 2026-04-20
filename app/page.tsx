import { SiGithub, SiMinutemailer } from '@icons-pack/react-simple-icons';
import { BlogPosts } from 'app/components/posts';

const Page = () => {
  return (
    <div className="grid md:grid-cols-3 gap-12">
      {/* Image and social links column */}
      <div className="md:sticky md:top-8 self-start">
        <div className="rounded-xl overflow-hidden mb-5">
          <img
            src="/images/profile.jpg"
            alt="Karen Almog"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex gap-5 justify-center">
          <a
            href="https://github.com/trawler"
            className="text-gray-400 hover:text-brand transition-colors"
            aria-label="GitHub Profile"
          >
            <SiGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/trawler"
            className="text-gray-400 hover:text-brand transition-colors"
            aria-label="LinkedIn Profile"
          >
            <svg width={20} height={20} viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="mailto:kalmog@trawler.sh?subject=Let's Connect (from trawler.sh)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-brand transition-colors"
            aria-label="Email"
          >
            <SiMinutemailer size={20} title="Email" />
          </a>
        </div>
      </div>

      {/* Bio and archive column */}
      <div className="md:col-span-2">
        <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-8">
          Karen Almog
        </h1>

        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            I'm a Technical Product Manager at <a
              href="https://metalbear.co"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand transition-colors"
            >Metalbear</a>, where I work on <a
              href="https://github.com/metalbear-co/mirrord"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand transition-colors"
            >mirrord</a>. mirrord lets you run your local process in the context of your Kubernetes cluster, so you can develop and debug against real infrastructure without deploying.
          </p>

          <p>
            Before moving into product, I spent about a decade as a software engineer in the cloud-native space.
            I was a core contributor to <a
              href="https://github.com/k0sproject/k0s"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand transition-colors"
            >k0s</a> at Mirantis, worked on <a
              href="https://github.com/coreos/tectonic-installer"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-brand transition-colors"
            >Tectonic</a> at CoreOS, and led platform engineering teams. That background shapes how I think about product.
          </p>

          <p>
            I'm a self-taught developer with no formal CS degree. The archive documents that learning in public - Go deep-dives, Kubernetes internals, and whatever I was digging into at the time.
          </p>
        </div>

        <div className="mt-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-brand mb-4">
            Archive
          </h2>
          <div className="border-t border-gray-100 pt-4">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
