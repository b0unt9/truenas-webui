import { DiskType } from 'app/enums/disk-type.enum';
import { EnclosureDiskStatus, EnclosureElementType, EnclosureStatus } from 'app/enums/enclosure-slot-status.enum';
import { VdevType } from 'app/enums/v-dev-type.enum';
import { DashboardEnclosure } from 'app/interfaces/enclosure.interface';

export const m40dashboardEnclosure: DashboardEnclosure[] = [
  {
    name: 'iX 4024Sp c205',
    model: 'M40',
    controller: true,
    dmi: 'TRUENAS-M40-HA',
    status: [EnclosureStatus.Ok],
    id: '5b0bd6d1a30714bf',
    vendor: 'iX',
    product: '4024Sp',
    revision: 'c205',
    bsg: '/dev/bsg/0:0:23:0',
    sg: '/dev/sg25',
    pci: '0:0:23:0',
    rackmount: true,
    top_loaded: false,
    front_slots: 24,
    rear_slots: 0,
    internal_slots: 0,
    elements: {
      [EnclosureElementType.ArrayDeviceSlot]: {
        1: {
          descriptor: 'slot00',
          status: 'OK',
          dev: 'sdb',
          supports_identify_light: true,
          drive_bay_number: 1,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7RJKH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        2: {
          descriptor: 'slot01',
          status: 'OK',
          dev: 'sda',
          supports_identify_light: true,
          drive_bay_number: 2,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7MLTH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        3: {
          descriptor: 'slot02',
          status: 'OK',
          dev: 'sdc',
          supports_identify_light: true,
          drive_bay_number: 3,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG2GZ5H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        4: {
          descriptor: 'slot03',
          status: 'OK',
          dev: 'sdd',
          supports_identify_light: true,
          drive_bay_number: 4,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG321ZH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        5: {
          descriptor: 'slot04',
          status: 'OK',
          dev: 'sde',
          supports_identify_light: true,
          drive_bay_number: 5,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG4TS7H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        6: {
          descriptor: 'slot05',
          status: 'OK',
          dev: 'sdg',
          supports_identify_light: true,
          drive_bay_number: 6,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG5ZRMH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        7: {
          descriptor: 'slot06',
          status: 'OK',
          dev: 'sdn',
          supports_identify_light: true,
          drive_bay_number: 7,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG29G5H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        8: {
          descriptor: 'slot07',
          status: 'OK',
          dev: 'sdf',
          supports_identify_light: true,
          drive_bay_number: 8,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG3USZH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        9: {
          descriptor: 'slot08',
          status: 'OK',
          dev: 'sdh',
          supports_identify_light: true,
          drive_bay_number: 9,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG5372H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        10: {
          descriptor: 'slot09',
          status: 'OK',
          dev: 'sdl',
          supports_identify_light: true,
          drive_bay_number: 10,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG77D9H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        11: {
          descriptor: 'slot10',
          status: 'OK',
          dev: 'sdj',
          supports_identify_light: true,
          drive_bay_number: 11,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7MZJH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'pewl',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Data,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 11,
                dev: 'sdj',
              },
            ],
          },
        },
        12: {
          descriptor: 'slot11',
          status: 'OK',
          dev: 'sdo',
          supports_identify_light: true,
          drive_bay_number: 12,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG5RPUH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        13: {
          descriptor: 'slot12',
          status: 'OK',
          dev: 'sdp',
          supports_identify_light: true,
          drive_bay_number: 13,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG5326H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        14: {
          descriptor: 'slot13',
          status: 'OK',
          dev: 'sdq',
          supports_identify_light: true,
          drive_bay_number: 14,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8DKXTD5H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        15: {
          descriptor: 'slot14',
          status: 'OK',
          dev: 'sdr',
          supports_identify_light: true,
          drive_bay_number: 15,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7L80H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        16: {
          descriptor: 'slot15',
          status: 'OK',
          dev: 'sdt',
          supports_identify_light: true,
          drive_bay_number: 16,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG0994H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'pewl2',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Data,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 16,
                dev: 'sdt',
              },
            ],
          },
        },
        17: {
          descriptor: 'slot16',
          status: 'OK',
          dev: 'sdi',
          supports_identify_light: true,
          drive_bay_number: 17,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG3UT9H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'pewl2',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Spare,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 17,
                dev: 'sdi',
              },
            ],
          },
        },
        18: {
          descriptor: 'slot17',
          status: 'OK',
          dev: 'sdm',
          supports_identify_light: true,
          drive_bay_number: 18,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7MW3H',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'NAS-128173',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Data,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 18,
                dev: 'sdm',
              },
            ],
          },
        },
        19: {
          descriptor: 'slot18',
          status: 'OK',
          dev: 'sdk',
          supports_identify_light: true,
          drive_bay_number: 19,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8DKA6AMH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        20: {
          descriptor: 'slot19',
          status: 'OK',
          dev: 'sds',
          supports_identify_light: true,
          drive_bay_number: 20,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG53AGH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'nmnmn',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Data,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 20,
                dev: 'sds',
              },
            ],
          },
        },
        21: {
          descriptor: 'slot20',
          status: 'OK',
          dev: 'sdu',
          supports_identify_light: true,
          drive_bay_number: 21,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8DJ61EBH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        22: {
          descriptor: 'slot21',
          status: 'OK',
          dev: 'sdv',
          supports_identify_light: true,
          drive_bay_number: 22,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG647SH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: {
            pool_name: 'encrypted',
            disk_status: EnclosureDiskStatus.Online,
            disk_read_errors: 0,
            disk_write_errors: 0,
            disk_checksum_errors: 0,
            vdev_name: 'stripe',
            vdev_type: VdevType.Data,
            vdev_disks: [
              {
                enclosure_id: '5b0bd6d1a30714bf',
                slot: 22,
                dev: 'sdv',
              },
            ],
          },
        },
        23: {
          descriptor: 'slot22',
          status: 'OK',
          dev: 'sdw',
          supports_identify_light: true,
          drive_bay_number: 23,
          size: 12000138625024,
          model: 'HUH721212AL4200',
          serial: '8HG7NKPH',
          type: DiskType.Hdd,
          rotationrate: 7200,
          pool_info: null,
        },
        24: {
          descriptor: 'slot23',
          status: 'Not installed',
          dev: null,
          supports_identify_light: true,
          drive_bay_number: 24,
          size: null,
          model: null,
          serial: null,
          type: null,
          rotationrate: null,
          pool_info: null,
        },
      },
      'SAS Expander': {
        26: {
          descriptor: 'SAS3 Expander',
          status: 'OK',
          value: null,
          value_raw: 16777216,
        },
      },
      Enclosure: {
        28: {
          descriptor: 'EnclosureElement01',
          status: 'OK',
          value: null,
          value_raw: 16777216,
        },
      },
      'Temperature Sensors': {
        30: {
          descriptor: 'Exp Die',
          status: 'OK',
          value: '67C',
          value_raw: 16799488,
        },
        31: {
          descriptor: 'Sense BP1',
          status: 'OK',
          value: '25C',
          value_raw: 16788736,
        },
        32: {
          descriptor: 'Sense BP2',
          status: 'OK',
          value: '26C',
          value_raw: 16788992,
        },
      },
      'Voltage Sensor': {
        34: {
          descriptor: '5V Sensor',
          status: 'OK',
          value: '5.06V',
          value_raw: 16777722,
        },
        35: {
          descriptor: '12V Sensor',
          status: 'OK',
          value: '12.13V',
          value_raw: 16778429,
        },
      },
    },
    label: 'M Series2',
  },
];