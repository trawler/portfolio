
const ResumePage = () => {
    return (
        <div className="space-y-6 text-sm">
            {/* Header Section */}
            <section className="mb-8">
                <h1 className="text-2xl font-semibold mb-2">
                    <span className="text-zinc-400">$</span> whoami
                </h1>
                <div className="space-y-4">
                    <p className="text-green-300">
                        Principal Software Engineer specialized in Kubernetes, cloud-native technologies, and distributed systems.
                        Passionate about open source and building scalable infrastructure solutions.
                    </p>
                    <div className="flex items-center text-sm">
                        <span className="text-zinc-400 font-mono">$CONTACT =</span>
                        <a
                            href="mailto:kalmog@trawler.sh?subject=Let's Connect (from trawler.sh)"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ml-2 text-green-400 hover:text-blue-400 underline transition-colors"
                        >
                            kalmog@trawler.sh
                        </a>
                    </div>
                </div>
            </section>
            {/* Experience Section */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4"> {/* Kept larger size for section heading */}
                    <span className="text-zinc-400">$</span> cat experience.txt
                </h2>
                <div className="space-y-6">
                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold text-base"> {/* Made role headings slightly larger than content */}
                            Principal Software Engineer
                        </h3>
                        <p className="text-zinc-400">SysEleven GmbH • Current</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1 max-w-2xl">
                            <li>Lead development of Kubernetes-based deployment platform.</li>
                            <li>Participate in Architecture and design sessions.</li>
                            <li>Drive technical decision-making and architecture planning.</li>
                            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                        </ul>
                    </div>

                    {/* Apply the same pattern to all other experience entries */}
                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold text-base">
                            Engineering Manager - Platform
                        </h3>
                        <p className="text-zinc-400">Flink SE • 12/2022 - 07/2023</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1 max-w-2xl">
                            <li>Managed two teams of total 7 engineers.</li>
                            <li>Lead development of Kubernetes-based deployment platform.</li>
                            <li>Initiated company-wide tech talks to reduce knowledge gaps between teams.</li>
                            <li>Ran code walkthroughs and reviews to ensure high-quality code.</li>
                            <li>Mentored and coached team members to help them achieve their career goals.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Senior Software Engineer</h3>
                        <p className="text-zinc-400">Mirantis • 02/2019 - 12/2022</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Core contributor to <a
                                href="https://github.com/k0sproject/k0s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 underline"
                            >k0s: the zero friction k8s distribution.</a></li>
                            <li>Implemented key features and improvements in Go.</li>
                            <li>Collaborated with open source community.</li>
                            <li>Took part in designing the Architecture for k0s (inspired by Kontena Paros).</li>
                            <li>Onboarded and mentored new team members and Junior engineers.</li>
                            <li>Established best practices & improvements to operational processes.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Software Engineer</h3>
                        <p className="text-zinc-400">CoreOS (later RedHat)• 10/2017 - 01/2019</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Developed the machine-api openshift operator and aws/libvirt actuator for
                                kubernetes.</li>
                            <li>Worked on the <a
                                href="https://github.com/coreos/tectonic-installer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 underline"
                            >CoreOS installer for Tectonic</a>.</li>
                            <li>Migrated infrastructure code from Terraform to Go.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Cloud and Web Operations Engineer</h3>
                        <p className="text-zinc-400">eBay (mobile.de) • 09/2013 - 09/2017</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Built and migrated mobile.de’s infrastructure from legacy infrastructure to the OpenStack Cloud, using terraform</li>
                            <li>Created workshops for development teams.</li>
                            <li>Maintained and operated critical production systems.</li>
                            <li>Implemented monitoring and automation solutions using tools like grafana, elasticsearch and more.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    <span className="text-zinc-400">$</span> ls skills/
                </h2>
                <div className="grid grid-cols-2 gap-4 text-green-300">
                    <div>
                        <h3 className="text-green-400 font-semibold mb-2">Core Technologies</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kubernetes</li>
                            <li>Go</li>
                            <li>Terraform</li>
                            <li>Linux</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-green-400 font-semibold mb-2">Cloud & Infrastructure</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>AWS</li>
                            <li>Libvirt</li>
                            <li>Infrastructure as Code (Iac)</li>
                            <li>Platform Engineering</li>
                            <li>Google Cloud</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-green-400 font-semibold mb-2">Methodologies & Practices</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>DevOps</li>
                            <li>Platform Engineering</li>
                            <li>Site Reliability Engineering (SRE)</li>
                            <li>Infrastructure Automation</li>
                            <li>Cloud Native Architecture</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-green-400 font-semibold mb-2">Secondary Skills</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>CI/CD</li>
                            <li>System Architecture</li>
                            <li>System Monitoring</li>
                            <li>Cloud Migration</li>
                            <li>Technical Leadership</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Speaking Section */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    <span className="text-zinc-400">$</span> cat speaking-engagements.txt
                </h2>
                <div className="text-green-300">
                    <ul className="list-disc list-inside space-y-2">
                        <li>Speaker at Kubernetes Community Days Berlin</li>
                        <div className="relative w-full md:max-w-lg">
                            <div className="relative w-full aspect-video">
                                <iframe
                                    src="https://www.youtube.com/embed/oAWeUcowZWU?si=BrbBRjKIYTPGy56m"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    className="absolute top-0 left-0 w-full h-full"
                                    allowFullScreen>
                                </iframe>
                            </div>
                        </div>
                        <li>
                            <a
                                href="https://community.cncf.io/events/details/cncf-cloud-native-berlin-presents-kubernetes-amp-cloud-native-berlin-inaugural-meetup/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-400 underline"
                            >Kubernetes and Cloud Native Kinvolk Meetup</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ResumePage;
