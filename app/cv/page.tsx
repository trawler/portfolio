
const ResumePage = () => {
    return (
        <div className="space-y-6">
            {/* Header Section */}
            <section className="mb-8">
                <h1 className="text-2xl font-semibold mb-2">
                    <span className="text-zinc-400">$</span> whoami
                </h1>
                <p className="text-green-300">
                    Principal Software Engineer specialized in Kubernetes, cloud-native technologies, and distributed systems.
                    Passionate about open source and building scalable infrastructure solutions.
                </p>
            </section>

            {/* Experience Section */}
            <section className="mb-8">
                <h2 className="text-xl font-semibold mb-4">
                    <span className="text-zinc-400">$</span> cat experience.txt
                </h2>
                <div className="space-y-6">
                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Principal Software Engineer</h3>
                        <p className="text-zinc-400">SysEleven GmbH • Current</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Lead development of Kubernetes-based deployment platform</li>
                            <li>Design and implement cloud-native infrastructure solutions</li>
                            <li>Drive technical decision-making and architecture planning</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Senior Software Engineer</h3>
                        <p className="text-zinc-400">Mirantis • Previous</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Core contributor to k0s Kubernetes distribution</li>
                            <li>Implemented key features and improvements in Go</li>
                            <li>Collaborated with open source community</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">Software Engineer</h3>
                        <p className="text-zinc-400">CoreOS • Previous</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Worked on Tectonic installer</li>
                            <li>Migrated infrastructure code from Terraform to Go</li>
                            <li>Improved deployment automation and reliability</li>
                        </ul>
                    </div>

                    <div className="border-l-2 border-green-400 pl-4">
                        <h3 className="text-green-400 font-semibold">DevOps Engineer</h3>
                        <p className="text-zinc-400">eBay (mobile.de) • Previous</p>
                        <ul className="list-disc list-inside text-green-300 mt-2 space-y-1">
                            <li>Member of siteops team managing platform infrastructure</li>
                            <li>Maintained and operated critical production systems</li>
                            <li>Implemented monitoring and automation solutions</li>
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
                        <h3 className="text-green-400 font-semibold mb-2">Technologies</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>Kubernetes</li>
                            <li>Docker</li>
                            <li>Golang</li>
                            <li>Linux</li>
                            <li>Git</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-green-400 font-semibold mb-2">Cloud Platforms</h3>
                        <ul className="list-disc list-inside space-y-1">
                            <li>AWS</li>
                            <li>Google Cloud</li>
                            <li>OpenStack</li>
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
                        <li>Regular presenter at local tech meetups</li>
                    </ul>
                </div>
            </section>
        </div>
    );
};

export default ResumePage;