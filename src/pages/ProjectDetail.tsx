import { useParams } from 'react-router-dom';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6 space-y-3">
        <h1 className="text-3xl font-semibold text-slate-900">Project Detail</h1>
        <p className="text-slate-700">Project ID: {id}</p>
        <p className="text-slate-600">Detailed case study coming soon.</p>
      </div>
    </section>
  );
};

export default ProjectDetail;
