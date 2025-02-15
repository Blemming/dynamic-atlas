import type {AtlasNode} from "@/model/atlasNode";
import type {DivinationCardImproveDto} from "@/model/dtos/divinationCardImproveDto";
import type {AtlasNodeImproveDto} from "@/model/dtos/atlasNodeImproveDto";

const convertToAtlasNodeImproveDto = (atlasNode: AtlasNode, divinationCards: DivinationCardImproveDto[], additionalTags: string[]) => {
    const atlasNodeImproveDto: AtlasNodeImproveDto = {
        active: atlasNode.active,
        boss: atlasNode.boss,
        additionalTags: additionalTags,
        divinationCards: divinationCards,
        filterTags: [],
        highestValueDivinationCard: {name: atlasNode.highestValueDivinationCard.name},
        linked: atlasNode.linked,
        locX: atlasNode.locX,
        locY: atlasNode.locY,
        mapTier: atlasNode.mapTier,
        nodeLayout: atlasNode.nodeLayout,
        name: atlasNode.name,
        notes: atlasNode.notes,
        uniqueMap: atlasNode.uniqueMap,
        id: atlasNode.id
    }
    return atlasNodeImproveDto;
}

export default convertToAtlasNodeImproveDto