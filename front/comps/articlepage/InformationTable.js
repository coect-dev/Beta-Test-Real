import { colors } from "../../shared.js";

export function InformationTableMobile(props) {
	return props.submodel.specs.map((spec, i) => (
		<tr key={i}>
			<td
				style={{
					width: 20,
					paddingTop: 11,
					paddingBottom: 11,
					paddingLeft: 15,
					paddingRight: 15,
					textAlign: "center",
					backgroundColor: colors.primaryDark,
					color: "white",
					fontSize: 12,
					...props.styles.cell,
				}}
			>
				{spec.field}
			</td>
			<td
				style={{
					...props.styles.cell,
					textAlign: "center",
					fontSize: 14,
				}}
			>
				{spec.description}
			</td>
		</tr>
	));
}

export function InformationTableDesktop(props) {
	return Array(Math.ceil(props.submodel.specs.length / 2))
		.fill(0)
		.map((_, i) => i)
		.map((i) => (
			<tr key={i}>
				{[0, 1].map((j) => {
					const spec = props.submodel.specs[i * 2 + j];
					return (
						spec && (
							<>
								<td
									key={j * 2}
									style={{
										width: 100,
										paddingTop: 11,
										paddingBottom: 11,
										paddingLeft: 15,
										paddingRight: 15,
										textAlign: "center",
										backgroundColor: colors.primaryDark,
										color: "white",
										fontSize: 12,
										...props.styles.cell,
									}}
								>
									{spec.field}
								</td>
								<td
									key={j * 2 + 1}
									style={{
										...props.styles.cell,
										width: 300,
										textAlign: "center",
										fontSize: 14,
									}}
								>
									{spec.description}
								</td>
							</>
						)
					);
				})}
			</tr>
		));
}
