import Styles from './styles.module.scss';

export const PortfolioPreview = ({ project }) => {
	const { frontmatter } = project;

	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard}>
				<img src={frontmatter.img} alt="Card image" className={Styles.titleCardImage} />

				<h1 className={Styles.title}>{frontmatter.title}</h1>
			</div>

			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{frontmatter.description}</p>

				<div className={Styles.tags}>
					Tagged:
					{frontmatter.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>

				<a className={Styles.link} href={project.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}
