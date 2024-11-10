import { SiGithub, SiLinkedin } from '@icons-pack/react-simple-icons';
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
                I'm Karen Almog, a Kubernetes developer and open source enthusiast who believes in learning in public.
                With experience at companies like Mirantis (<a
                  href="https://github.com/k0sproject/k0s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >k0s</a>), CoreOS (<a
                  href="https://github.com/coreos/tectonic-installer"
                  target='_blank'
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >Tectonic</a>
                ), and eBay, I've been fortunate
                to work on some exciting projects in the cloud-native space.
              </p>

              <p>
                Currently, I'm a Principal Software Engineer at SysEleven GmbH, where I help build and improve our
                Kubernetes-based deployment platform.
              </p>

              <p>
                When I'm not coding, you might find me speaking at tech events like Kubernetes Community Days Berlin
                or local meetups.
              </p>

              <p>
                Here's the thing - I'm a self-taught developer with no formal CS degree, and I'm proud of that journey!
                This blog is my way of documenting what I learn as I deep-dive into Golang and continue exploring the
                cloud-native ecosystem.
              </p>

              <p>
                If you're into Kubernetes, Go, or open source, or if you're on your own
                self-learning adventure, you might find something useful here.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">
            <span className="text-zinc-400">visitor@karen:~$</span> ls blog/latest
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