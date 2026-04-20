import { SiGithub, SiLinkedin, SiMinutemailer } from '@icons-pack/react-simple-icons';
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
            <SiLinkedin size={20} />
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
