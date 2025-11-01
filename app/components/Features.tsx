import React from 'react';

// You can find free icons from sites like heroicons.com and use them as SVG components
const AskIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
const AnalyzeIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 1.5m1-1.5l1 1.5m0 0l.5 1.5m-.5-1.5h-9.5l-.5 1.5m0 0l-1-1.5m1 1.5h7.5" /></svg>;
const ExecuteIcon = () => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a17.96 17.96 0 00-12.128 0M15.59 14.37A17.96 17.96 0 0121.75 12a17.96 17.96 0 01-6.16 2.37m0 0a6 6 0 01-5.84-7.38m5.84 2.56a6 6 0 010 7.38" /></svg>;


const FeatureCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-card-bg p-8 rounded-xl border border-white/10 transform hover:-translate-y-2 transition-transform duration-300">
        <div className="bg-primary-lime/10 text-primary-lime w-16 h-16 rounded-lg flex items-center justify-center mb-6">
            {icon}
        </div>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-light-gray">{children}</p>
    </div>
);


const Features = () => {
    return (
        <section className="py-20 px-4">
            <div className="container mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">释放AI的力量，只需三步</h2>
                <p className="max-w-2xl mx-auto text-light-gray mb-12">
                    我们把复杂的流程变得极其简单，让你的想法直达市场。
                </p>
                <div className="grid md:grid-cols-3 gap-8">
                    <FeatureCard icon={<AskIcon />} title="1. 提问 (Ask)">
                        用日常语言描述你的投资想法、市场疑问或交易指令。就像和朋友聊天一样简单。
                    </FeatureCard>
                    <FeatureCard icon={<AnalyzeIcon />} title="2. 分析 (Analyze)">
                        Juglans的AI引擎会立即处理海量数据，进行深度分析，并生成清晰的洞察或可执行策略。
                    </FeatureCard>
                    <FeatureCard icon={<ExecuteIcon />} title="3. 执行 (Execute)">
                        基于AI的建议，一键确认即可完成交易，或将洞察保存到你的知识库。
                    </FeatureCard>
                </div>
            </div>
        </section>
    );
};

export default Features;