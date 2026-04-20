import { SiGithub, SiLinkedin, SiMinutemailer } from '@icons-pack/react-simple-icons';
import { BlogPosts } from 'app/components/posts';

const Page = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {/* Image and social links column */}
      <div className="md:sticky md:top-4">
        <div className="bg-zinc-800/50 rounded-lg p-2 mb-4">
          <div className="overflow-hidden rounded-lg">
            <img
              src="/images/profile.jpg"
              alt="Karen Almog"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex gap-6 justify-center mt-4">
          <a
            href="https://github.com/trawler"
            className="text-green-400 hover:text-blue-400 transition-colors"
            aria-label="GitHub Profile"
          >
            <SiGithub size={24} />
          </a>
          <a
            href="https://linkedin.com/in/trawler"
            className="text-green-400 hover:text-blue-400 transition-colors"
            aria-label="LinkedIn Profile"
          >
            <SiLinkedin size={24} />
          </a>
          <a
            href="mailto:kalmog@trawler.sh?subject=Let's Connect (from trawler.sh)"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-blue-400 transition-colors"
            aria-label="Email"
          >
            <SiMinutemailer size={24} title="Email" />
          </a>
        </div>
      </div>

      {/* Bio and blog posts column */}
      <div className="md:col-span-2">
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold tracking-tight mb-6">
            <span className="text-zinc-400">visitor@karen:~$</span> whoami
          </h1>

          <div className="text-green-300">
            <span className="text-zinc-400"></span>
            <div className="mt-4 space-y-4 ml-4">
              <p>
                I'm Karen Almog, a Technical Product Manager at <a
                  href="https://metalbear.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >Metalbear</a>, where I work on <a
                  href="https://github.com/metalbear-co/mirrord"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >mirrord</a>. mirrord lets you run your local process in the context of your Kubernetes cluster, so you can develop and debug against real infrastructure without deploying.
              </p>

              <p>
                Before moving into product, I spent about a decade as a software engineer in the cloud-native space.
                I was a core contributor to <a
                  href="https://github.com/k0sproject/k0s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >k0s</a> at Mirantis, worked on <a
                  href="https://github.com/coreos/tectonic-installer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >Tectonic</a> at CoreOS, and led platform engineering teams. That background shapes how I think about product.
              </p>

              <p>
                I'm a self-taught developer with no formal CS degree. The archive documents that learning in public - Go deep-dives, Kubernetes internals, and whatever I was digging into at the time.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">
            <span className="text-zinc-400">visitor@karen:~$</span> ls archive/
          </h2>
          <div className="bg-zinc-800/50 rounded-lg p-4">
            <BlogPosts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;