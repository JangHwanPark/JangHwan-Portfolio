// 탭 프로바이더를 사용해 상태를 전역 관리
import { TabsContext } from "../context/TabsContext";
import { useCallback, useState } from "react";
import { TabsProviderProps } from "../types/tabs";

/**
 * `TabsProvider`는 `Tabs` 내부에서 탭 상태를 전역적으로 관리하는 컨텍스트 프로바이더입니다.
 *
 * @template T - 탭 데이터의 타입
 * @param {TabsProviderProps<T>} props - `TabsProvider`의 속성
 * @param {TabItem<T>[]} props.tabs - 탭 목록
 * @param {string} [props.defaultTab] - 기본적으로 활성화될 탭
 * @param {ReactNode} props.children - 자식 요소 (탭 목록과 패널들)
 *
 * @example
 * ```tsx
 * <TabsProvider tabs={tabItems} defaultTab="home">
 *   <TabList>
 *     <Tab tabKey="home">홈</Tab>
 *   </TabList>
 *   <TabPanels>
 *     <TabPanel tabKey="home">홈 컨텐츠</TabPanel>
 *   </TabPanels>
 * </TabsProvider>
 * ```
 */
export const TabsProvider = <T extends {} = {}> ({
  tabs,
  defaultTab = '',
  children
}: TabsProviderProps<T>) => {
  const initialTab = tabs.some(tab => tab.key === defaultTab)
    ? defaultTab
    // 존재하지 않는 탭이면 첫 번째 탭 선택
    : (tabs.length > 0 ? tabs[0].key : "");
  const [active, setActive] = useState<string>(initialTab);

  const handleTabChange = useCallback((tabKey: string) => {
    setActive(tabKey);
  }, []);

  return (
    <TabsContext.Provider value={{ active, handleTabChange, tabs }}>
      {children}
    </TabsContext.Provider>
  )
}