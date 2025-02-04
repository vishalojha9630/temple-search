import React, { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/router';

import { useFormik } from 'formik';

import searchicon from './icon/search-icon.svg'
import Button from '../button';

const Search = () => {
	const router = useRouter()

	useEffect(() => {
		if (router.asPath !== router.pathname && router.pathname === '/404') {
			router.push('/404')
		}
	}, [router])

	const formik = useFormik({

		initialValues: { search: typeof router?.query?.q === 'string' ? router?.query?.q : '' },

		enableReinitialize: true,
		onSubmit: (values: { search: string }) => {
			const queryParams: { [key: string]: string | string[] | undefined; } = { ...router?.query }
			const pathname = router.pathname === '/categories/[slug]' ? `/categories/${router?.query?.slug}` : '/shop'

			if (values.search === '') {
				delete queryParams.q

				router.push({
					pathname: pathname,
					query: { ...queryParams }
				})
			}
			else {
				router.push({
					pathname: pathname,
					query: { ...queryParams, q: values.search }
				})
			}
		}
	})

	return (
		<>
			<form onSubmit={formik.handleSubmit}>
				<div className="input-group">
					<input
						type="search"
						value={formik.values?.search || ''}
						className="form-control"
						name="search"
						placeholder="Search by flowers, cakes, gifts etc."
						onChange={formik.handleChange}
					/>
					<Button type="submit" className="text">

						<Image src={searchicon} height="15" width="15" alt="search" />
					</Button>
				</div>
			</form>
		</>
	)
}
export default Search