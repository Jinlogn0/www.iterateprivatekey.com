import BasicLayout from '../../layouts/Basic'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {derivationPaths} from "../../utils/const";
import useDerivationPath from "../../hooks/useDerivationPath";
import {useRouter} from "next/router";

export default function Index() {

    const {keyPairs, isError, isLoading} = useDerivationPath()
    const router = useRouter()
    const {query} = useRouter()

    const reload = (path)=> {
        let params = JSON.parse(JSON.stringify(query))
        params['path'] = path
        router.push({
            pathname: router.asPath.split("?")[0], query: params
        }, undefined, {
            shallow: true
        })
    }

    return (
        <BasicLayout>
            <div className='mx-auto mx-12'>
                <Tabs
                    align='center'
                    variant='enclosed'
                    className='mt-4'
                >
                    <TabList>
                        {derivationPaths.map((path)=> {
                            return (
                                <Tab
                                    onClick={()=>{
                                        reload(path)
                                    }}
                                    key={path}
                                >{path}</Tab>
                            )
                        })}
                    </TabList>
                    <TabPanels>
                        {derivationPaths.map((path)=> {
                            return (
                                <TabPanel>
                                    <p>Stay Tuned</p>
                                </TabPanel>
                            )
                        })}
                    </TabPanels>
                </Tabs>
            </div>
        </BasicLayout>
    )
}
