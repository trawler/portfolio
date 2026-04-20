
const ResumePage = () => {
    return (
        <div className="space-y-12 text-sm">
            {/* Header Section */}
            <section>
                <h1 className="text-3xl font-semibold tracking-tight text-gray-900 mb-4">
                    Karen Almog
                </h1>
                <div className="space-y-3">
                    <p className="text-gray-700 leading-relaxed max-w-2xl">
                        Technical Product Manager with a background in software engineering. I've spent years building
                        Kubernetes infrastructure and developer tooling, and now I work on product for developers in the same space.
                        I care about open source, developer experience, and shipping things that actually get used.
                    </p>
                    <a
                        href="mailto:kalmog@trawler.sh?subject=Let's Connect (from trawler.sh)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-brand underline hover:text-brand/70 transition-colors"
                    >
                        kalmog@trawler.sh
                    </a>
                </div>
            </section>

            {/* Experience Section */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
                    Experience
                </h2>
                <div className="space-y-8">
                    <div className="border-l-2 border-brand pl-5">
                        <h3 className="text-gray-900 font-semibold">
                            Technical Product Manager
                        </h3>
                        <p className="text-gray-400 mt-0.5 mb-2">Metalbear • 03/2026 - Present</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 max-w-2xl">
                            <li>Product manager for <a
                                href="https://github.com/metalbear-co/mirrord"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline hover:text-brand/70 transition-colors"
                            >mirrord</a>, an open source tool for local Kubernetes development.</li>
                            <li>Define product roadmap and work closely with engineering on feature design and prioritization.</li>
                            <li>Engage directly with the developer community to understand pain points and shape the product.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-gray-900 font-semibold">
                            Principal Software Engineer
                        </h3>
                        <p className="text-gray-400 mt-0.5 mb-2">SysEleven GmbH • 2023 - 02/2026</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 max-w-2xl">
                            <li>Lead development of Kubernetes-based deployment platform.</li>
                            <li>Participate in architecture and design sessions.</li>
                            <li>Drive technical decision-making and architecture planning.</li>
                            <li>Collaborate with cross-functional teams to define, design, and ship new features.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-gray-900 font-semibold">
                            Engineering Manager - Platform
                        </h3>
                        <p className="text-gray-400 mt-0.5 mb-2">Flink SE • 12/2022 - 07/2023</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1 max-w-2xl">
                            <li>Managed two teams of 7 engineers.</li>
                            <li>Lead development of Kubernetes-based deployment platform.</li>
                            <li>Initiated company-wide tech talks to reduce knowledge gaps between teams.</li>
                            <li>Ran code walkthroughs and reviews to ensure high-quality code.</li>
                            <li>Mentored and coached team members to help them achieve their career goals.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-gray-900 font-semibold">Senior Software Engineer</h3>
                        <p className="text-gray-400 mt-0.5 mb-2">Mirantis • 02/2019 - 12/2022</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Core contributor to <a
                                href="https://github.com/k0sproject/k0s"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline hover:text-brand/70 transition-colors"
                            >k0s: the zero friction k8s distribution.</a></li>
                            <li>Implemented key features and improvements in Go.</li>
                            <li>Collaborated with open source community.</li>
                            <li>Took part in designing the architecture for k0s.</li>
                            <li>Onboarded and mentored new team members and junior engineers.</li>
                            <li>Established best practices and improvements to operational processes.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-gray-900 font-semibold">Software Engineer</h3>
                        <p className="text-gray-400 mt-0.5 mb-2">CoreOS (later RedHat) • 10/2017 - 01/2019</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Developed the machine-api OpenShift operator and AWS/libvirt actuator for Kubernetes.</li>
                            <li>Worked on the <a
                                href="https://github.com/coreos/tectonic-installer"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline hover:text-brand/70 transition-colors"
                            >CoreOS installer for Tectonic</a>.</li>
                            <li>Migrated infrastructure code from Terraform to Go.</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-gray-200 pl-5">
                        <h3 className="text-gray-900 font-semibold">Cloud and Web Operations Engineer</h3>
                        <p className="text-gray-400 mt-0.5 mb-2">eBay (mobile.de) • 09/2013 - 09/2017</p>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                            <li>Built and migrated mobile.de's infrastructure from legacy systems to OpenStack using Terraform.</li>
                            <li>Created workshops for development teams.</li>
                            <li>Maintained and operated critical production systems.</li>
                            <li>Implemented monitoring and automation solutions using Grafana, Elasticsearch, and more.</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
                    Skills
                </h2>
                <div className="grid grid-cols-2 gap-8 text-gray-600">
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-2">Product</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Product Strategy</li>
                            <li>Roadmapping</li>
                            <li>Developer Experience</li>
                            <li>Open Source Community</li>
                            <li>Stakeholder Management</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-2">Technical</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kubernetes</li>
                            <li>Go</li>
                            <li>Cloud Native</li>
                            <li>Platform Engineering</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-gray-900 font-semibold mb-2">Practices</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Agile</li>
                            <li>Technical Leadership</li>
                            <li>Cross-functional Collaboration</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Speaking Section */}
            <section>
                <h2 className="text-xs font-semibold tracking-widest uppercase text-brand mb-6">
                    Speaking
                </h2>
                <div className="text-gray-600">
                    <ul className="list-disc list-inside space-y-3">
                        <li>Speaker at Kubernetes Community Days Berlin</li>
                        <div className="relative w-full md:max-w-lg mt-3">
                            <div className="relative w-full aspect-video rounded-lg overflow-hidden">
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
                        <li className="mt-3">
                            <a
                                href="https://community.cncf.io/events/details/cncf-cloud-native-berlin-presents-kubernetes-amp-cloud-native-berlin-inaugural-meetup/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-brand underline hover:text-brand/70 transition-colors"
                            >Kubernetes and Cloud Native Kinvolk Meetup</a>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ResumePage;
